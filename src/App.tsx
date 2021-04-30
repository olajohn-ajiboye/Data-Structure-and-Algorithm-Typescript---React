import React from 'react';
// import {  findMeetingSlots } from './pair-programming/binary-search';
// import { turtle, } from './pair-programming/index';

import { processLogs2 } from './amazon/test';

import { DoubleNode,MyLinkedList} from './list/LinkedList';


function App() {

  const list = new MyLinkedList()
  
  list.addAtIndex(0, 3)
  list.get(0)
  const head = list.head
  console.log(head)
  


  return (
    <div className="App">
     APP
    </div>
  );
}

export default App;
