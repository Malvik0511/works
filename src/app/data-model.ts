
export class Reciever {
	constructor(
		public cardNumber:[string, string, string, string]
	){}
  
}

export class Sender{
	constructor(public cardNumber:[string, string, string, string],
		public name: string, public month:string,  public year:string){
	}
}


export class RemittanceData{
	constructor(public sender: Sender, public reciever: Reciever, public summ: number){
	}
}

export const reciever = new Reciever(["", "", "", ""])
export const sender = new Sender(["", "", "", ""], "", "", "")
