import { Component, OnInit } from '@angular/core';
import { IIntro } from "../../../model/interface";
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  url:string = "\assets\img\chapter11\introduction\fish-fossil-in-rock.jpg"
  introduction:IIntro = {
    chapterName:"একাদশ অধ্যায়",
    chapterTitle:"খনিজ সম্পদ: জীবাশ্ম",
    chapterTitleEn:"(Mineral Resources: Fossils)",
    photoUrl:`/assets/img/chapter11/introduction/fish-fossil-in-rock.jpg`,
    title:"এ পৃথিবীর বয়স প্রায় 4.54 বিলিয়ন বছর। আজকে পৃথিবীকে যেমন দেখছ, অনেক অনেক বছর আগে পৃথিবীর রূপ কিন্তু এমন ছিল না। আজ থেকে 500 বা 600 মিলিয়ন বছর আগে এই পৃথিবীছিল ঘন বনজঙ্গল, নিচু জলাভূমি আর সাগর-মহাসাগরে পরিপূর্ণ। প্রাকৃতিক বিপর্যয়ে ধ্বংসপ্রাপ্ত মৃতপ্রাণী, উক্তি, শৈবাল-ছত্রাক নিচু এলাকাগুলােতে জমা হয়েছিল। তার উপর পড়তে থাকল পলিরআস্তরণ। এভাবে মিলিয়ন মিলিয়ন বছর ধরে এ সকল উদ্ভিদ আর প্রাণীর দেহাবশেষের উপর হাজারহাজার ফুট মাটি, বিভিন্ন শিলার আরশ হয়ে গেল। উচ্চচাপ, উচ্চ তাপমাত্রা, মিলিয়ন মিলিয়ন বছরধরে বিভিন্ন ভৌত আর রাসায়নিক পরিবর্তন ঘটে কয়লা, পেট্রোলিয়াম আর প্রকৃতিক গ্যাস সৃষ্টিহলাে। এদেরকে বলে জীবাশ্ম জ্বালানি। কয়লার মূল উপাদান কার্বন। আর পেট্রোলিয়ামের মূল উপাদানশুধু কার্বন ও হাইড্রোজেনের দ্বারা সৃষ্ট যৌগ হাইড্রোকার্বন। হাইড্রোকার্বন হলাে জৈব যৌগ। অ্যালকোহল, অ্যালডিহাইড, কিটোন, কার্বক্সিলিক এসিডসহ আরও যে সকল জৈব যৌগ আছে তারামূলত হাইড্রোকার্বন থেকেই সৃষ্ট। এগুলাে নিয়েই এ অধ্যায়ে আলােচনা করা হবে।"
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
