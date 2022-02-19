import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AppmoduleAndServicemoduleService } from '../services/appmodule-and-servicemodule.service';
import { ProvideinService } from '../services/providein.service';
import { ServicemoduleonlyService } from '../services/servicemoduleonly.service';
import { WihtoutprovideinService } from '../services/wihtoutprovidein.service';

@Component({
  selector: 'app-root-inject-example',
  templateUrl: './root-inject-example.component.html',
  styles: [
  ]
})
export class RootInjectExampleComponent implements AfterViewInit {

  @ViewChild('printdata') printdataElement: ElementRef;

  constructor(
    private _provideIn: ProvideinService,
    private _withoutProvideIn : WihtoutprovideinService,
    private _serviceModuleOnly : ServicemoduleonlyService,
    private _appModuleAndServiceModule : AppmoduleAndServicemoduleService
  ) {
   
   }

  ngAfterViewInit(): void {
    this._provideIn.printData(this.printdataElement, ' calling through Provide in service, :- ProvideinService');
    this._provideIn.printData(this.printdataElement, '  --  this service not added into any providers of any module');
    this._provideIn.printData(this.printdataElement, ' ************************************************************************ ');
    this._provideIn.printData(this.printdataElement, '                                                                          ');
    this._withoutProvideIn.printData(this.printdataElement, ' calling through without Provide in service : WihtoutprovideinService ');
    this._withoutProvideIn.printData(this.printdataElement, '    --- this service dont use the provide in property , but its required to add in the modules provider ');
    this._withoutProvideIn.printData(this.printdataElement, '    --- right now added to app.module provider section ');
    
    this._provideIn.printData(this.printdataElement, '                                                                          ');
    this._provideIn.printData(this.printdataElement, ' ************************************************************************ ');

    this._serviceModuleOnly.printData(this.printdataElement, ' calling through without Provide in service : ServicemoduleonlyService , ');
    this._serviceModuleOnly.printData(this.printdataElement, ' --- this service dont use the provide in property  ');
    this._serviceModuleOnly.printData(this.printdataElement, ' --- but its required to add in the modules provider  ');
    this._serviceModuleOnly.printData(this.printdataElement, ' --- right now added to this service.module provider section ');
   
    this._provideIn.printData(this.printdataElement, '                                                                          ');
    this._provideIn.printData(this.printdataElement, ' ************************************************************************ ');


    this._appModuleAndServiceModule.printData(this.printdataElement, ' calling through without Provide in service :- AppmoduleAndServicemoduleService ');
    this._appModuleAndServiceModule.printData(this.printdataElement, '  --  add in the both provider of module app.module and service.module ');
    this._appModuleAndServiceModule.printData(this.printdataElement, '  --  to verify is creating new instance? ');
    this._appModuleAndServiceModule.printData(this.printdataElement, '  ----- Yes, Constructor of the service get called twice');
  }

}
