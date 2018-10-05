export default () => ({

  list: () => {
    return new Promise(resolve => {

      const countries = [
        {
          id: 0,
          name: 'Argentina'
        },
        {
          id: 1,
          name: 'Brasil'
        }
      ];

      setTimeout(() => {
        resolve(countries);
      }, 100);
      
    });
  }

});
