import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[destacar]'
})
export class DestacarDirective {

  @Input() destacar:string;//parametro de entrada
  
  constructor(private element: ElementRef){
        console.log(" DestacarDirective constructor");
  }

  //Escuchadores de eventos
  @HostListener('mouseenter')
    public onMouseEnter(){
        this.element.nativeElement.style.backgroundColor = this.destacar;
    }
 
    @HostListener('mouseleave')
    public onMouseLeave(){
        this.element.nativeElement.style.backgroundColor = "";
    }

}
