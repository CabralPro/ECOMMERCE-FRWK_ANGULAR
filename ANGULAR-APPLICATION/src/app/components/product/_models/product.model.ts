export interface Product {
	id?: string
	nome: string
	descricao: string
	imagem: string
	quantidadeEstoque: number
	valor: number
  categoriaId: string
	altura: number
  largura: number
  profundidade: number
}