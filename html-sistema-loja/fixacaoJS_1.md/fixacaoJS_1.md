function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let salarioTot = 2000 + qtdeCarrosVendidos * 100
 let salarioTot2 = valorTotalVendas * 0.05
 const totalMensal = salarioTot + salarioTot2
 return totalMensal
}