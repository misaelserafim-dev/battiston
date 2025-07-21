export const fetchFeaturedAdSpots = () => {
  const featuredSpots = [];

  for (let i = 1; i <= 12; i++) {
    featuredSpots.push({
      id: i,
      url: 'ponto-' + i,
      image: '/assets/modelo.png',
      type: 'Painel Rodoviário',
      title: 'Ponto ' + i + ' - Corupá',
      address: 'R. Quintino Bocaiúva - Centro',
      direction: 'Sentido Av. General Osório',
    });
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(featuredSpots);
    }, 100);
  });
};
