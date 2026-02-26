import { Component } from '@angular/core';
// import { ExamplePdfViewerComponent } from '../example-pdf-viewer/example-pdf-viewer.component';
// import { MarkdownModule } from 'ngx-markdown';
import ContentAttributes, { Post } from '../../interface';
// import { BlogCardholderComponent } from './blogcardholder/blogcardholder.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';


@Component({
  selector: 'app-updated',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './index.page.html',
  styleUrl: './index.page.css'
})
export default class UpdatedComponent {

      readonly contents=injectContentFiles<ContentAttributes>((contentFile) => {
        return contentFile.filename.includes('/src/content');
      });
        
      // contents: ContentAttributes[] = [
      //     {
      //       title: 'TIMDA Solutions motor control solutions',
      //       slug: 'timda-solution',
      //       description: 'TIMDA Solutions offers a comprehensive range of motor control solutions designed to meet the diverse needs of various industries. Our solutions encompass advanced technologies and innovative designs to ensure optimal performance, efficiency, and reliability in motor control applications.',
      //       coverImage: '/mdfiles/timda_solution/cover.svg',
      //     },
      //     {
      //       title: 'แนะนำเทคโนโลยี GreenPAK(Configurable Mixed-signal ICs) และตัวอย่างการประยุกต์ใช้งาน',
      //       slug: 'greenpak-intro',
      //       description: 'วงจรรวมขนาดเล็กที่สามารถกำหนดค่าได้ (Configurable Mixed-signal ICs) ในตระกูล GreenPAK™ เป็นวงจรรวมที่รวมบล็อกอนาล็อกและดิจิทัลหลากหลายประเภทไว้ในชิปเดียว',
      //       coverImage: '/mdfiles/greenPAK/cover.png',
      //     },]
          

//       posts:Post[]=[{      
//       title: 'TIMDA Solutions motor control solutions',
//       id: 'timda-solution',
//       link: '/mdfiles/timda_solution/timda-solution.md',
//       excerpt: 'TIMDA Solutions offers a comprehensive range of motor control solutions designed to meet the diverse needs of various industries. Our solutions encompass advanced technologies and innovative designs to ensure optimal performance, efficiency, and reliability in motor control applications.',
//       image: '/mdfiles/timda_solution/cover.svg',
// },
// {      
//       title: 'แนะนำเทคโนโลยี GreenPAK(Configurable Mixed-signal ICs) และตัวอย่างการประยุกต์ใช้งาน',
//       id: 'greenpak-intro',
//       // excerpt: 'The GreenPAK™ family of devices are configurable mixed-signal integrated circuits (ICs) that combine a variety of analog and digital building blocks into a single chip. These devices are designed to simplify circuit design, reduce component count, and enhance system functionality.',
//       excerpt: 'วงจรรวมขนาดเล็กที่สามารถกำหนดค่าได้ (Configurable Mixed-signal ICs) ในตระกูล GreenPAK™ เป็นวงจรรวมที่รวมบล็อกอนาล็อกและดิจิทัลหลากหลายประเภทไว้ในชิปเดียว วงจรเหล่านี้ถูกออกแบบมาเพื่อช่วยให้ออกแบบวงจรได้ง่ายขึ้น ลดจำนวนชิ้นส่วน และเพิ่มประสิทธิภาพการทำงานของระบบได้',
//       image: '/mdfiles/greenPAK/cover.png',
// },
// {      
//       title: 'GreenPAK(Configurable Mixed-signal ICs) และตัวอย่างการประยุกต์ใช้งาน',
//       id: 'greenpak-intro',
//       // excerpt: 'The GreenPAK™ family of devices are configurable mixed-signal integrated circuits (ICs) that combine a variety of analog and digital building blocks into a single chip. These devices are designed to simplify circuit design, reduce component count, and enhance system functionality.',
//       excerpt: 'วงจรรวมขนาดเล็กที่สามารถปรับแต่งได้ (Configurable Mixed-signal ICs) ในตระกูล GreenPAK™ เป็นวงจรรวมที่รวมบล็อกอนาล็อกและดิจิทัลหลากหลายประเภทไว้ในชิปเดียว วงจรเหล่านี้ถูกออกแบบมาเพื่อช่วยให้ออกแบบวงจรได้ง่ายขึ้น ลดจำนวนชิ้นส่วน และเพิ่มประสิทธิภาพการทำงานของระบบได้',
//       image: '/mdfiles/greenPAK/cover.png',
// },
// ];

}

