import { Component } from '@angular/core';
interface Project {
  title: string;
  description: string;
  link: string;
  tech: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: ' PingMe',
      description:
        'Created a real-time chat application using Angular and Socket.IO, featuring dynamic theming and room-based communication, improving user engagement and customization.',
      link: 'https://github.com/darshvs/PingMe-Chatrooms',
      tech: 'Angular(HTML, CSS), Socket.io, NodeJs, Javascript.'
    },
    {
      title: 'StreamVerse',
      description:
        'Engineered a cutting-edge video streaming platform, offering a wide range of movies, shows, and exclusive content, revolutionizing user entertainment experiences.',
      link: 'https://github.com/darshvs/StreamVerse',
      tech: 'React(HTML, CSS), Socket.io, NodeJs, Javascript, MongoDB.'
    },
    {
      title: 'Darshans Corner',
      description:
        'Developed a portfolio to showcase skills and projects, providing a comprehensive view of expertise and achievements.',
      link: 'https://github.com/darshvs/Darshans_corner',
      tech: 'Angular(HTML, CSS)'
    },
  ];
  showToast: boolean = false;
  toastMessage: string = '';
  LinkOperation(link: any, operation: string) {
    if (operation === 'share') {
      const textarea = document.createElement('textarea');
      textarea.value = link;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.toastMessage = `Link copied to clipboard: ${link}`;
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    }
    if (operation === 'view') {
      window.open(link, '_blank');
    }
  }


}
