// RNA Rede Neural Artificifial
// Função numero aleatorio
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Função interpolação linear
function lerp(a, b, t) {
    return a + (b - a) * t
}

// Criando a classe da IA

class Neuron {
    constructor(inputs) {
        this.bias = randomRange(-1, 1);

        this.weightList = new Array(inputs)
        .fill()
        .map(() => randomRange(-1, 1))
    }
}

//Lista de sinais
g(signalList = []); {
    let u = 0;

    for (let i = 0; i < this.weightList.lenght; i++) {
        u += signalList[i] * this.weightList[i]
    }

    if (Math.tanh(u) > this.bias) return 1; //Ativado
    else return 0; //Desativado
};

//Mutação dos pesos
mutate(rate = 1); {
    this.weightList = this.weightList.map(() => {
        return lerp(w, randomRange(-1, 1), rate)
    });

    this.bias = lerp(this.bias, randomRange(-1, 1), range)
}

//Criando o RNA
class RNA {
    constructor(inputCount = 1, levelList = []) {
        this.score = 0;

        this.levelList = levelList.map((l, i) => {
            const inputSize = i === 0 ? inputCount : levelList[i - 1]

            return new Array(l).fill().map(() => new Neuron(inputSize));
        });
    }

    compute(list = []) {
        for (let i = 0; i < this.levelList.length; i++) {
            const tempList = []

            for(const neuron of this.levelList[i]) {
                if (list.length !== neuron.weightList.length) throw new Error("Entrada inválida");
                tempList.push(neuron.g(list))
            }
            list = tempList;
        }
        return list;
    }
}

mutate(rate = 1); {
    for (const level of this.levelList) {
        for (const neuron of level) neuron.mutate(rate)
    }
} 

load(rna); {
    if (!rna) return
    try {
        this.levelList = rna.map((neuronList) => {
            return neuronList.map((neuron) => {
                const n = new Neuron();
                n.bias = neuron.bias
                n.weightList = neuron.weightList;

                return n;
            });
        });
    } catch (e) {
        return;
    }

    save (); {
        return this.levelList;
    }
}

//Exportando a classe RNA
export default RNA;