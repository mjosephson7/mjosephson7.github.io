const express = require('express');
const cors = require('cors');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Data file paths
const DATA_DIR = path.join(__dirname, 'data');
const BANNER_FILE = path.join(DATA_DIR, 'banner.json');
const ANNOUNCEMENTS_FILE = path.join(DATA_DIR, 'announcements.json');

// Ensure data directory and files exist
async function initializeData() {
    try {
        await fs.ensureDir(DATA_DIR);
        
        // Initialize banner file if it doesn't exist
        if (!await fs.pathExists(BANNER_FILE)) {
            await fs.writeJson(BANNER_FILE, {
                enabled: false,
                color: 'yellow',
                message: ''
            });
        }
        
        // Initialize announcements file if it doesn't exist
        if (!await fs.pathExists(ANNOUNCEMENTS_FILE)) {
            await fs.writeJson(ANNOUNCEMENTS_FILE, []);
        }
        
        console.log('Data files initialized successfully');
    } catch (error) {
        console.error('Error initializing data files:', error);
    }
}

// Banner endpoints
app.get('/api/banner', async (req, res) => {
    try {
        const banner = await fs.readJson(BANNER_FILE);
        res.json(banner);
    } catch (error) {
        console.error('Error reading banner:', error);
        res.status(500).json({ error: 'Failed to read banner settings' });
    }
});

app.post('/api/banner', async (req, res) => {
    try {
        const { enabled, color, message } = req.body;
        
        // Validate input
        if (typeof enabled !== 'boolean' || !color || (enabled && !message)) {
            return res.status(400).json({ error: 'Invalid banner data' });
        }
        
        const bannerData = { enabled, color, message };
        await fs.writeJson(BANNER_FILE, bannerData);
        
        res.json({ success: true, data: bannerData });
    } catch (error) {
        console.error('Error saving banner:', error);
        res.status(500).json({ error: 'Failed to save banner settings' });
    }
});

// Announcements endpoints
app.get('/api/announcements', async (req, res) => {
    try {
        const announcements = await fs.readJson(ANNOUNCEMENTS_FILE);
        res.json(announcements);
    } catch (error) {
        console.error('Error reading announcements:', error);
        res.status(500).json({ error: 'Failed to read announcements' });
    }
});

app.post('/api/announcements', async (req, res) => {
    try {
        const { title, content } = req.body;
        
        // Validate input
        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required' });
        }
        
        const announcements = await fs.readJson(ANNOUNCEMENTS_FILE);
        
        const newAnnouncement = {
            id: Date.now().toString(),
            title: title.trim(),
            content: content.trim(),
            date: new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            })
        };
        
        // Add to beginning of array (newest first)
        announcements.unshift(newAnnouncement);
        
        await fs.writeJson(ANNOUNCEMENTS_FILE, announcements);
        
        res.json({ success: true, data: newAnnouncement });
    } catch (error) {
        console.error('Error adding announcement:', error);
        res.status(500).json({ error: 'Failed to add announcement' });
    }
});

app.delete('/api/announcements/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const announcements = await fs.readJson(ANNOUNCEMENTS_FILE);
        const updatedAnnouncements = announcements.filter(announcement => announcement.id !== id);
        
        if (announcements.length === updatedAnnouncements.length) {
            return res.status(404).json({ error: 'Announcement not found' });
        }
        
        await fs.writeJson(ANNOUNCEMENTS_FILE, updatedAnnouncements);
        
        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting announcement:', error);
        res.status(500).json({ error: 'Failed to delete announcement' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, async () => {
    await initializeData();
    console.log(`OFMC Admin Server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
});