<template>
    <q-card class="weather-card">
      <q-card-section>
        <div class="text-h6">Weather</div>
      </q-card-section>
      <q-card-section class="weather-input">
        <q-input
          v-model="location"
          label="Enter Location"
          outlined
          dense
          @keyup.enter="fetchWeather"
        />
        <q-btn
          label="Get Weather"
          color="primary"
          @click="fetchWeather"
          dense
        />
      </q-card-section>
      <q-card-section v-if="weatherData" class="weather-details">
        <div class="weather-location">{{ weatherData.name }}</div>
        <div class="weather-description">
          {{ weatherData.weather[0].description }}
        </div>
        <div class="weather-temp">{{ weatherData.main.temp }} °C</div>
      </q-card-section>
      <q-card-section v-if="errorMessage" class="weather-error">
        <div>{{ errorMessage }}</div>
      </q-card-section>
    </q-card>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        location: '',
        weatherData: null,
        errorMessage: ''
      };
    },
    methods: {
      async fetchWeather() {
        const apiKey = '17bcc3140c29914cf112b476acc66baf'; // Ganti dengan kunci API OpenWeatherMap Anda
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=${apiKey}`;
        try {
          this.errorMessage = ''; // Reset pesan kesalahan
          const response = await axios.get(url);
          this.weatherData = response.data;
        } catch (error) {
          this.weatherData = null; // Reset data cuaca
          if (error.response) {
            // Server merespons dengan status selain 2xx
            this.errorMessage = `Error: ${error.response.data.message}`;
          } else if (error.request) {
            // Permintaan dibuat tetapi tidak ada respons
            this.errorMessage = 'Error: No response from server. Please try again.';
          } else {
            // Kesalahan lainnya
            this.errorMessage = `Error: ${error.message}`;
          }
          console.error("Error fetching the weather data: ", error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .weather-card {
    max-width: 400px;
    margin: 20px auto;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .weather-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .weather-details {
    padding: 16px;
    text-align: center;
  }
  
  .weather-location {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .weather-description {
    font-size: 1rem;
    color: #555;
    margin-bottom: 8px;
  }
  
  .weather-temp {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .weather-error {
    padding: 16px;
    text-align: center;
    background-color: #ffebee;
    color: #e53935;
    border-radius: 4px;
    margin-top: 8px;
  }
  </style>
  