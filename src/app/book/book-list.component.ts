import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { ActivatedRoute } from '@angular/router';

import { Book } from './book';


@Component({
    templateUrl:"./book-list.component.html",
    //selector:"book-list"
})
export class BookListComponent implements OnInit{
    books:Book[];
    constructor(private bookService: BookService,
                private route:ActivatedRoute){}
        ngOnInit():void{
            //.We have to read the route parameters
            this.route.paramMap.subscribe((map)=>{
                let category = map.get("category");
                console.log(category);
                
                this.bookService.findBookByCategory(category).subscribe((data)=>{
                    this.books = data;
                    console.log(data);
                });
            });

        
            
            
            
        }
    }