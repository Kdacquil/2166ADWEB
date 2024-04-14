import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'booksapp';
  readonly APIUrl = "http://localhost:5038/api/books/";
  books: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refreshBooks();
  }

  refreshBooks() {
    this.http.get<any[]>(this.APIUrl + 'GetBooks').subscribe(
      (data) => {
        this.books = data;
      },
      (error) => {
        console.error("Error fetching books:", error);
      }
    );
  }

  addBook(title: string, description: string, price: string) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);

    this.http.post(this.APIUrl + 'AddBook', formData).subscribe(
      (data) => {
        alert(data);
        this.refreshBooks();
      },
      (error) => {
        console.error("Error adding book:", error);
        alert("Failed to add book");
      }
    );
  }

  deleteBook(id: string) {
    this.http.delete(this.APIUrl + 'DeleteBook?id=' + id).subscribe(
      (data) => {
        alert(data);
        this.refreshBooks();
      },
      (error) => {
        console.error("Error deleting book:", error);
        alert("Failed to delete book");
      }
    );
  }
}