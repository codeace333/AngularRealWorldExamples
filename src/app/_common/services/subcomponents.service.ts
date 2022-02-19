import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Subject } from 'rxjs';
import { Componentmodule } from '../_models/componentmodule.model';

@Injectable({
  providedIn: 'root'
})
export class SubcomponentsService {
  arrmixComponentLists: Array<Componentmodule>;
  arrmixSubComModule$ = new Subject();

  constructor() {
   
    this.arrmixComponentLists = [
      {
        name: 'Routing', description: 'Learn More Routing In Details', path: '/routing',
        children: [
          { name: 'Children', description: 'Learn More Children In Details', path: 'children' },
          { name: 'Nested Routing', description: 'Learn More Observable In Details', path: 'nestedrouting' },
        ]
      },
      {
        name: 'Observables', description: 'Learn More Observable In Details', path: '/observables',
        children: [
          { name: 'Observable', description: 'Learn More Observable In Details', path: 'observable' },
          { name: 'Http Observable', description: 'Learn More Observable In Details', path: 'httpobservable' },
          { name: 'Subject', description: 'Learn More Subject In Details', path: 'subject' },
          { name: 'Behaviour Subject', description: 'Learn More Behaviour Subject In Details', path: 'behavioursubject' },
          { name: 'Reply Subject', description: 'Learn More Reply Subject In Details', path: 'replysubject' },
          { name: 'Async Subject', description: 'Learn More Async Subject In Details', path: 'asyncsubject' },
        ]
      },
      {
        name: 'Promises', description: 'Learn More Promises In Details', path: '/promises',
        children: [
          { name: 'Simple Promise', description: 'Learn More Simple Promise In Details', path: 'promise' },
          { name: 'Promises with Then ', description: 'Learn More Promises with Then In Details', path: 'promisewiththen' },
          { name: 'Promises with Catch', description: 'Learn More Promises with Catch In Details', path: 'promisewithcatch' },
        ]
      },
      {
        name: 'Services', description: 'Learn More Services In Details', path: '/services',
        children: [
          { name: 'Root Inject', description: 'Learn More Root Inject In Details', path: 'rootInject' },
          { name: 'Module wise  ', description: 'Learn More Module wise In Details', path: 'modulewise' },
          { name: 'Common Services', description: 'Learn More Common Services In Details', path: 'commonservice' },
          { name: 'Without ProvideIn', description: 'Learn More Without ProvideIn In Details', path: 'withoutprovidein' },
        ]
      },
      {
        name: 'Intercept', description: 'Learn More intercept In Details', path: '/intercept',
        children: [
          { name: 'Root Inject', description: 'Learn More Root Inject In Details', path: 'rootInject' },
          { name: 'Module wise  ', description: 'Learn More Module wise In Details', path: 'modulewise' },
          { name: 'Common Services', description: 'Learn More Common Services In Details', path: 'commonservice' },
          { name: 'Without ProvideIn', description: 'Learn More Without ProvideIn In Details', path: 'withoutprovidein' },
        ]
      },
      {
        name: 'Directives', description: 'Learn More sirectives In Details', path: '/sirectives',
        children: [
          { name: 'Root Inject', description: 'Learn More Root Inject In Details', path: 'rootInject' },
          { name: 'Module wise  ', description: 'Learn More Module wise In Details', path: 'modulewise' },
          { name: 'Common Services', description: 'Learn More Common Services In Details', path: 'commonservice' },
          { name: 'Without ProvideIn', description: 'Learn More Without ProvideIn In Details', path: 'withoutprovidein' },
        ]
      },
      {
        name: 'Pipes', description: 'Learn More Pipes In Details', path: '/pipes',
        children: [
          { name: 'Root Inject', description: 'Learn More Root Inject In Details', path: 'rootInject' },
          { name: 'Module wise  ', description: 'Learn More Module wise In Details', path: 'modulewise' },
          { name: 'Common Services', description: 'Learn More Common Services In Details', path: 'commonservice' },
          { name: 'Without ProvideIn', description: 'Learn More Without ProvideIn In Details', path: 'withoutprovidein' },
        ]
      },
      {
        name: 'Reactive Forms', description: 'Learn More Reactive Forms In Details', path: '/reactiveforms',
        children: [
          { name: 'Root Inject', description: 'Learn More Root Inject In Details', path: 'rootInject' },
          { name: 'Module wise  ', description: 'Learn More Module wise In Details', path: 'modulewise' },
          { name: 'Common Services', description: 'Learn More Common Services In Details', path: 'commonservice' },
          { name: 'Without ProvideIn', description: 'Learn More Without ProvideIn In Details', path: 'withoutprovidein' },
        ]
      },
      {
        name: 'Template Driven Forms', description: 'Learn More Template Driven Forms In Details', path: '/templateDForms',
        children: [
          { name: 'Root Inject', description: 'Learn More Root Inject In Details', path: 'rootInject' },
          { name: 'Module wise  ', description: 'Learn More Module wise In Details', path: 'modulewise' },
          { name: 'Common Services', description: 'Learn More Common Services In Details', path: 'commonservice' },
          { name: 'Without ProvideIn', description: 'Learn More Without ProvideIn In Details', path: 'withoutprovidein' },
        ]
      },
      {
        name: 'Guards', description: 'Learn More Guards In Details', path: '/guards',
        children: [
          { name: 'Root Inject', description: 'Learn More Root Inject In Details', path: 'rootInject' },
          { name: 'Module wise  ', description: 'Learn More Module wise In Details', path: 'modulewise' },
          { name: 'Common Services', description: 'Learn More Common Services In Details', path: 'commonservice' },
          { name: 'Without ProvideIn', description: 'Learn More Without ProvideIn In Details', path: 'withoutprovidein' },
        ]
      },
      {
        name: 'Resolvers', description: 'Learn More resolvers In Details', path: '/resolvers',
        children: [
          { name: 'Root Inject', description: 'Learn More Root Inject In Details', path: 'rootInject' },
          { name: 'Module wise  ', description: 'Learn More Module wise In Details', path: 'modulewise' },
          { name: 'Common Services', description: 'Learn More Common Services In Details', path: 'commonservice' },
          { name: 'Without ProvideIn', description: 'Learn More Without ProvideIn In Details', path: 'withoutprovidein' },
        ]
      },
      {
        name: 'ViewChild', description: 'Learn More ViewChild In Details', path: '/viewchild',
        children: [
          { name: 'Root Inject', description: 'Learn More Root Inject In Details', path: 'rootInject' },
          { name: 'Module wise  ', description: 'Learn More Module wise In Details', path: 'modulewise' },
          { name: 'Common Services', description: 'Learn More Common Services In Details', path: 'commonservice' },
          { name: 'Without ProvideIn', description: 'Learn More Without ProvideIn In Details', path: 'withoutprovidein' },
        ]
      },
      {
        name: 'ContentChild', description: 'Learn More ContentChild In Details', path: '/contentChild',
        children: [
          { name: 'Root Inject', description: 'Learn More Root Inject In Details', path: 'rootInject' },
          { name: 'Module wise  ', description: 'Learn More Module wise In Details', path: 'modulewise' },
          { name: 'Common Services', description: 'Learn More Common Services In Details', path: 'commonservice' },
          { name: 'Without ProvideIn', description: 'Learn More Without ProvideIn In Details', path: 'withoutprovidein' },
        ]
      },
      {
        name: 'OutputInput', description: 'Learn More OutputInput In Details', path: '/outputInput',
        children: [
          { name: 'Root Inject', description: 'Learn More Root Inject In Details', path: 'rootInject' },
          { name: 'Module wise  ', description: 'Learn More Module wise In Details', path: 'modulewise' },
          { name: 'Common Services', description: 'Learn More Common Services In Details', path: 'commonservice' },
          { name: 'Without ProvideIn', description: 'Learn More Without ProvideIn In Details', path: 'withoutprovidein' },
        ]
      },
      {
        name: 'Rx Js Operators', description: 'Learn More RxJs Operators In Details', path: '/rxjs',
        children: [
          { name: 'Root Inject', description: 'Learn More Root Inject In Details', path: 'rootInject' },
          { name: 'Module wise  ', description: 'Learn More Module wise In Details', path: 'modulewise' },
          { name: 'Common Services', description: 'Learn More Common Services In Details', path: 'commonservice' },
          { name: 'Without ProvideIn', description: 'Learn More Without ProvideIn In Details', path: 'withoutprovidein' },
        ]
      },
    ];
  }

  getChildComp(key){
    let  arrmixSubComModule = this.arrmixComponentLists.filter(data => data.name.toLowerCase() == key.toLowerCase());
    this.arrmixSubComModule$.next(arrmixSubComModule);
  }

  getAllComModule() {
    return this.arrmixComponentLists;
  }
}
