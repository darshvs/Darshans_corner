import { Component } from '@angular/core';
import { ChatbotService } from 'src/app/Services/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  messages: { content: string, sentBy: string }[] = [];
  userMessage: string = '';
  isChatVisible: boolean = false;

  constructor(private chatService: ChatbotService) { }

  ngOnInit(): void { }

  sendMessage() {
    if (this.userMessage.trim() === '') return;

    this.messages.push({ content: this.userMessage, sentBy: 'user' });

    this.messages.push({ content: this.userMessage, sentBy: 'bot' });

    this.chatService.sendMessage(this.userMessage).subscribe((response: any) => {
      const botMessage = response.queryResult.fulfillmentText;
      this.messages.push({ content: botMessage, sentBy: 'bot' });
    });

    this.userMessage = '';
  }
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }
  toggleChat() {
    this.isChatVisible = !this.isChatVisible;
  }
}
