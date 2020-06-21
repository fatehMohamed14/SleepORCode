import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CodeService } from '../code.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {
  form: FormGroup;
  loading = false;
  url_reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  constructor(private fb: FormBuilder, private articleService: CodeService) {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      author: [null, [Validators.required]],
      description: [null],
      content: [null, [Validators.required]],
      url: [null, [Validators.required, Validators.pattern(this.url_reg)]],
      publishedAt: [null],
      urlToImage: [null]
    })
   }

  ngOnInit(): void {
  }

  onFilechanged(event: any) {
    console.log(event);
    this.form.get('urlToImage').setValue(event.target.files[0]);
  }

  save() {
    const publishedAt = formatDate(new Date(Date.now()), 'YYYY-MM-DD', 'en-US');
    const fd = new FormData;
    fd.append('title', this.form.get('title').value);
    fd.append('description', this.form.get('description').value);
    fd.append('author', this.form.get('author').value);
    fd.append('content', this.form.get('content').value);
    fd.append('url', this.form.get('url').value);
    fd.append('urlToImage', this.form.get('urlToImage').value);
    fd.append('publishedAt', publishedAt)

    this.articleService.addArticle(fd).subscribe(console.log);

  }

}
