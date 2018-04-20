
export class Reciever {
	constructor(
		public cardNumber:[string, string, string, string]
	){}
  
}

export class Sender{
	constructor(public cardNumber:[string, string, string, string],
		public fullName: string, public month:string,  public year:string){

	} 
}

export class PopUpInfo{
	constructor(public message: string,	public styles: string){

	} 
}


export class RemittanceData{
	date: string;
	constructor(public sender: Sender, public reciever: Reciever, public summ: string){
		this.date = this.formatDate(new Date())
	}

	formatDate(d:Date):string{
		let day, month, year;
		day = d.getDate()
		if (day < 10) day = "0"+day;
		month = d.getMonth() + 1;
		if (month < 10) month = '0' + month;
		year = d.getFullYear();
		return `${day}.${month}.${year}`;
	}
}

export const defaultSender = new Sender(['', '', '', ''], "", "", "");
export const defaultReciever = new Reciever(['', '', '', '']);
