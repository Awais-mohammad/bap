import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';


@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.scss']
})
export class AddprodComponent implements OnInit {



  constructor(
    private http: HttpClient
  ) { }

  cats: string[] = ['Leather pants', 'Brixton Collection', 'Leather Jackets', 'Curves', 'Czechoslavakia Collection', 'Impreganation and Cleaning', 'Leather Vest', 'Leather Coats',
    'Keivar Shirts', 'Sweat Shirts', 'Tshirts', 'Sweat Shirts', 'Women Jackets', 'Mens Jackets', 'Leather Items'
  ]
  colors: any[] = ['Red', 'Black', 'Grey']
  choosedcolors: any[] = []
  fileToUpload: File = null;
  color: string;
  name: string;
  quantity: number;
  price: number;
  category: string;
  desc: string;

  addData() {
    if (!this.name || !this.quantity || !this.price || !this.category || !this.choosedcolors || !this.imageURLS || !this.bannerimageURL || !this.desc) {
      alert('Fill out all fields inclufing images!!!')
    }
    else {
      alert('ALL OKEY')

      let prodData = {
        name: this.name,
        bannerImageURL: this.bannerimageURL,
        prodImageURLS: this.imageURLS,
        category: this.category,
        quantity: this.quantity,
        price: this.price,
        color: this.choosedcolors,
        timestamp: new Date(),
        description: this.desc
      }
      this.http.post('https://brixback.herokuapp.com/products/', prodData, { responseType: 'text' as 'json' }).subscribe((ret) => {
        alert(ret);

      }), (err => {
        alert(err);

      })
    }
  }

  oncolorchange(color) {

    this.choosedcolors.push(color.value)


  }

  selectcat(cat) {
    this.category = cat.value
  }

  remove(param) {
    this.choosedcolors.splice(param, 1)
  }

  attachFile(e) {
    if (e.target.files.length == 0) {
      console.log("No file selected!");
      return
    }
    let file: File = e.target.files[0];
    this.fileToUpload = file;
    this.uploadAvatar(file)
  }


  bannerimageURL: string;

  uploadAvatar(f) {
    let formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);

    this.http.post('https://brixback.herokuapp.com/products/avatar', formData, { responseType: 'text' }).subscribe(res => {
      console.log(res);
      this.bannerimageURL = 'https://brixback.herokuapp.com/products/avatar/' + res
      console.log(this.bannerimageURL);

    })

  }

  attachimage(e) {
    if (e.target.files.length == 0) {
      console.log("No file selected!");
      return
    }
    let file: File = e.target.files[0];
    this.fileToUpload = file;
    this.uploadother(file)
  }

  imageURLS: any[] = []

  uploadother(f) {
    let formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);

    this.http.post('https://brixback.herokuapp.com/products/avatar', formData, { responseType: 'text' }).subscribe(res => {
      console.log(res);
      const url = 'https://brixback.herokuapp.com/products/avatar/' + res


      if (this.imageURLS.length > 2) {
        alert('cannot add more than 2 images click on image to remove!!!')
      }
      else {
        this.imageURLS.push(url)
      }
    })
  }

  removeimg(param) {
    this.imageURLS.splice(param, 1)
  }
  ngOnInit(): void {
  }

}
