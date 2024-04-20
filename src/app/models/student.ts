export interface Student  {
name:string;
gender: string;
mobile: string;
email: string;
batch: string;
address:{
city: string;
mandal: string;
district: string;
state: string;
pincode: string;
},
education: [
{qualification:string,year: number, percentage: number},
],
company: {
name: string;
location: string;
package: string;
offerDate: string;
},
sourceType: string;
sourceFrom: string;
referralName: string;
}
