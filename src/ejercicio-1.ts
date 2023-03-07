class ContInstance {
  private cont: number;
  private static contInstance:ContInstance;

  private constructor() {
    this.cont = 0;
  }

  getCont() {
    return ContInstance.contInstance.cont;
  }

  sumCont() {
    ContInstance.contInstance.cont++;
  }

  public static getContInstance(): ContInstance {
    if (!ContInstance.contInstance) {
      ContInstance.contInstance = new ContInstance();
    }
    return ContInstance.contInstance;
  }
}

const contInstance = ContInstance.getContInstance();
contInstance.sumCont();


const secondContInstance = ContInstance.getContInstance();
secondContInstance.sumCont();

console.log(contInstance.getCont());
console.log(secondContInstance.getCont());