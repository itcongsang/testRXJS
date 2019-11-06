
import { range, interval, combineLatest, concat, of } from 'rxjs';
import { map, filter, take, combineAll, concatAll, scan } from 'rxjs/operators';
import { collectionData } from 'rxfire/firestore';
import { tap } from 'rxjs/operators';
import {loadDB } from '../../demo-rx/firebase/firebaseRx';

const getData = ()=>{
  const db = loadDB();  
  let _strGet=db.firestore().collection('books');
  let vaule= collectionData(_strGet, 'id')
  .pipe(
    tap(cities => console.log('This is just an observable!'))
  );
  return vaule;
}

export {
  getData
} 