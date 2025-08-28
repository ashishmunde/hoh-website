<script setup lang="ts">
import { LOGO_IMAGE, PRIMARY_COLOR, SECONDARY_COLOR, PRIMARY_HOVER, SECONDARY_HOVER } from '@/utils/const'

const socialMediaIcons = [
  { 
    name: 'Instagram', 
    icon: 'https://cdn.simpleicons.org/instagram/E4405F', 
    link: 'https://instagram.com/yourpage' 
  },
  { 
    name: 'WhatsApp', 
    icon: 'https://cdn.simpleicons.org/whatsapp/25D366', 
    link: 'https://wa.me/yourphonenumber' 
  },
  { 
    name: 'YouTube', 
    icon: 'https://cdn.simpleicons.org/youtube/FF0000', 
    link: 'https://youtube.com/yourchannel' 
  },
  { 
    name: 'Facebook', 
    icon: 'https://cdn.simpleicons.org/facebook/1877F2', 
    link: 'https://facebook.com/yourpage' 
  }
]

const locations = ['Karve Nagar', 'Paud Road', 'Aundh']
</script>

<template>
  <div class="topbar">
    <!-- Top Strip - Primary Color -->
    <div class="top-strip">
      <div class="top-strip-content">
        <div class="franchise-message">
          WE DON'T SELL FRANCHISE.
        </div>
        <div class="locations">
          <span class="location-icon">📍</span>
          <span class="location-text">{{ locations.join(' | ') }}</span>
        </div>
      </div>
    </div>

    <!-- Bottom Strip - White -->
    <div class="bottom-strip">
      <div class="bottom-strip-content">
        <!-- Left Side - Logo -->
        <div class="logo-section">
          <div class="logo-container">
            <img :src="LOGO_IMAGE" alt="Apple Unisex Salon" class="logo-image" />
          </div>
        </div>

        <!-- Right Side - Contact Info -->
        <div class="contact-section">
            <div class="social-icons">
                <a 
                v-for="social in socialMediaIcons" 
                :key="social.name"
                :href="social.link"
                class="social-icon"
                :title="social.name"
                >
                <img :src="social.icon" :alt="social.name" class="social-icon-image" />
                </a>
          </div>
          <div class="contact-item">
            <span class="contact-icon">✉️</span>
            <div class="contact-details">
              <span class="contact-label">EMAIL</span>
              <span class="contact-value">info@houseofhair.in</span>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <div class="contact-details">
              <span class="contact-label">CONTACT</span>
              <span class="contact-value">+91 9999999999</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  width: 100%;
  font-family: Arial, sans-serif;
}

/* Top Strip Styles */
.top-strip {
  background-color: v-bind(PRIMARY_COLOR);
  color: white;
  padding: 0.5rem 0;
}

.top-strip-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.franchise-message {
  font-weight: bold;
  font-size: 0.9rem;
}

.locations {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.location-icon {
  color: v-bind(SECONDARY_COLOR);
  font-size: 1rem;
}

.location-text {
  font-size: 0.9rem;
}

/* Bottom Strip Styles */
.bottom-strip {
  background-color: white;
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.bottom-strip-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-container {
  width: 300px;
  height: 60px;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: v-bind(SECONDARY_COLOR);
  line-height: 1.2;
}

.tagline {
  font-size: 0.7rem;
  color: #666666;
  margin-top: 0.2rem;
}

/* Social Media Section */
.social-media-section {
  padding: 0.5rem 1rem;
}   

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: v-bind(SECONDARY_COLOR);
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: v-bind(PRIMARY_COLOR);
}

/* Contact Section */
.contact-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-icon {
  color: v-bind(PRIMARY_COLOR);
  font-size: 1.2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
}

.contact-label {
  font-size: 0.7rem;
  color: v-bind(SECONDARY_COLOR);
  font-weight: bold;
}

.contact-value {
  font-size: 0.8rem;
  color: #666666;
}

/* Responsive Design */
@media (max-width: 768px) {
  .top-strip-content,
  .bottom-strip-content {
    padding: 0 1rem;
  }
  
  .bottom-strip-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .logo-section {
    flex-direction: column;
    text-align: center;
  }
  
  .social-media-section {
    order: -1;
  }
  
  .contact-section {
    flex-direction: row;
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .top-strip-content {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
  
  .franchise-message,
  .location-text {
    font-size: 0.8rem;
  }
  
  .brand-name {
    font-size: 1rem;
  }
  
  .contact-section {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
