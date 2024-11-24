// AI Core Functionality
class AICore {
    constructor() {
        this.initialized = false;
        this.chatInterface = document.getElementById('aiChat');
        this.chatMessages = document.getElementById('chatMessages');
        this.aiAssistantBtn = document.getElementById('aiAssistant');
        this.setupEventListeners();
    }

    setupEventListeners() {
        // AI Assistant Button
        if (this.aiAssistantBtn) {
            this.aiAssistantBtn.addEventListener('click', () => this.toggleAIChat());
        }

        // Chat Interface
        document.querySelector('.close-chat')?.addEventListener('click', () => {
            this.chatInterface?.classList.remove('open');
        });

        // Chat Input
        const chatInput = document.querySelector('.chat-input input');
        const sendButton = document.querySelector('.chat-input button');

        if (chatInput && sendButton) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleUserMessage(chatInput.value);
                    chatInput.value = '';
                }
            });

            sendButton.addEventListener('click', () => {
                if (chatInput.value) {
                    this.handleUserMessage(chatInput.value);
                    chatInput.value = '';
                }
            });
        }
    }

    toggleAIChat() {
        if (!this.initialized) {
            this.initialize();
        }
        this.chatInterface?.classList.toggle('open');
    }

    initialize() {
        this.addMessage('AI Assistant', 'Hello! How can I help you today?', 'ai');
        this.initialized = true;
    }

    handleUserMessage(message) {
        // Add user message
        this.addMessage('You', message, 'user');

        // Simulate AI processing
        this.showTypingIndicator();

        // Simulate AI response after a delay
        setTimeout(() => {
            this.removeTypingIndicator();
            this.generateAIResponse(message);
        }, 1000);
    }

    addMessage(sender, text, type) {
        if (!this.chatMessages) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}-message`;
        messageDiv.innerHTML = `
            <span class="sender">${sender}</span>
            <p>${text}</p>
            <span class="timestamp">${this.getCurrentTime()}</span>
        `;
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    showTypingIndicator() {
        if (!this.chatMessages) return;

        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.innerHTML = 'AI is typing...';
        this.chatMessages.appendChild(typingDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    removeTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        typingIndicator?.remove();
    }

    generateAIResponse(userMessage) {
        // Simple response generation logic
        let response = "I understand you're asking about ";
        if (userMessage.toLowerCase().includes('stream')) {
            response += "streaming. Our platform offers high-quality streaming services with AI enhancements.";
        } else if (userMessage.toLowerCase().includes('ai')) {
            response += "our AI features. We use advanced artificial intelligence to enhance your experience.";
        } else {
            response += "that. I'm here to help with any questions about our platform.";
        }
        this.addMessage('AI Assistant', response, 'ai');
    }

    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
}

// Initialize AI Core when document is ready
document.addEventListener('DOMContentLoaded', () => {
    window.aiCore = new AICore();
});
