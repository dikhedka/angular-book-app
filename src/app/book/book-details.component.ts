import { Component } from '@angular/core';

@Component({
    templateUrl:"./book-details.component.html",
   // selector:"book-details"
})
export class BookDetailsComponent{
        book = 
            {
                "bookId": 102,
                "imageUrl": "assets/images/head_first_servlet_&_jsp.jpg",
                "title": "Head First Servlet & JSP",
                "authors": [
                      {"firstName": "Kathy", "lastName": "Sierra"},
                      {"firstName": "Bert", "lastName": "Bates"}
                 ],
                 "category": "programming",
                 "publisher": "O Reilly",
                 "noOfPages": 928, 
                 "rating": 4.8,
                 "edition": 2,
                 "price": 1140,
                 "releaseDate": new Date(2014, 10, 28)
           }
        }
