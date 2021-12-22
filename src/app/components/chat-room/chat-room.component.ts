import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  async ngOnInit(): Promise<void> {
    try{
    const ok=await this.db.object<string>('d').valueChanges().pipe(first()).toPromise();
    console.log(ok);
    }
    catch (error) {           
      console.error(error);       
  }   
}
}
