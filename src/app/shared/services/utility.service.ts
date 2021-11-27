import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getFormateDate(dateString:string){
    return {
       day: dateString.split('T')[0].split('-')[2],
       monthFull: this.getMonthName(dateString.split('T')[0].split('-')[1]).split('-')[1],
       monthShort: this.getMonthName(dateString.split('T')[0].split('-')[1]).split('-')[0],
       year: dateString.split('T')[0].split('-')[0]
     }
 }
 getMonthName(monthString: string):string {
   if (monthString == '01') {
     return 'JAN-January'
   }
   else if (monthString == '02') {
     return 'FEB-Fanuary'
   }
   else if (monthString == '03') {
     return 'MAR-March'
   }
   else if (monthString == '04') {
     return 'APR-April'
   }
   else if (monthString == '05') {
     return 'MAY-May'
   }
   else if (monthString == '06') {
     return 'JUN-June'
   }
   else if (monthString == '07') {
     return 'JUL-July'
   }
   else if (monthString == '08') {
     return 'AUG-August'
   }
   else if (monthString == '09') {
     return 'SEP-September'
   }
   else if (monthString == '10') {
     return 'OCT-October'
   }
   else if (monthString == '11') {
     return 'NOV-November'
   }
   return 'DEC-December' 
 }
}
