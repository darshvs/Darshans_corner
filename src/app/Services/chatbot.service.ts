import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private dialogflowUrl = `https://dialogflow.googleapis.com/v2/projects/${environment.dialogflow.projectId}/agent/sessions/`;

  constructor(private http: HttpClient) {}

  public sendMessage(message: string) {
    const sessionId = Math.random().toString(36).substring(7);
    const url = `${this.dialogflowUrl}${sessionId}:detectIntent`;

    const body = {
      queryInput: {
        text: {
          text: message,
          languageCode: 'en-US',
        },
      },
    };

    const headers = {
      headers: {
        Authorization: `Bearer ${this.getAccessToken()}`,
      },
    };

    return this.http.post(url, body, headers);
  }

  private getAccessToken() {
    // Implement the logic to generate an access token using your service account
    // You can use a library like google-auth-library to generate the token
    // This is a placeholder function
    return 'YOUR_ACCESS_TOKEN';
  }}
