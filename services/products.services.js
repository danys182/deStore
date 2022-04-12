const faker = require('faker');

class ProductsService {
	#products = [];
	constructor() {
		this.#generate();
	}

	#generate() {
		const limit = 100;
		for (let index = 0; index < limit; index++) {
			this.#products.push({
				id: faker.datatype.uuid(),
				name: faker.commerce.productName(),
				price: parseInt(faker.commerce.price(), 10),
				image: faker.image.imageUrl(),
			});
		}
	}

	async getAll() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				//Simulo petición satisfactoria
				resolve(this.#products);
			}, 3000);
		});
	}

	async getById(id) {
		return new Promise((resolve, reject) => {
			const product = this.#products.find((item) => item.id === id);

			if (!product) {
				throw new Error('Product not found');
			}

			//Se recupera correctamente
			resolve(product);
		});
	}

	async create(data) {
		const newProduct = {
			id: faker.datatype.uuid(),
			...data,
		};

		return new Promise((resolve, reject) => {
			this.#products.push(newProduct);
			//Se almacena correctamente
			resolve(newProduct);
		});
	}

	async update(id, changes) {
		return new Promise((resolve, reject) => {
			const index = this.#products.findIndex((item) => item.id === id);
			if (index === -1) {
				throw new Error('Product not found');
			}
			const product = this.#products[index];
			const newProduct = { ...product, ...changes };
			//Se modifica correctamente
			resolve((this.#products[index] = newProduct));
		});
	}

	async delete(id) {
		return new Promise((resolve, reject) => {
			const index = this.#products.findIndex((item) => item.id === id);
			if (index === -1) {
				throw new Error('Product not found');
			}
			//Se elimina correctamente
			this.#products.splice(index, 1);
			resolve(id);
		});
	}
}

module.exports = ProductsService;
