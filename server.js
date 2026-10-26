require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

// Inicialización de Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba de la API
app.get('/api/estado', (req, res) => {
    res.json({ 
        estado: 'Exitoso', 
        mensaje: '¡Servidor Node.js de RehabTrack funcionando correctamente!' 
    });
});

// Arranque del servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});