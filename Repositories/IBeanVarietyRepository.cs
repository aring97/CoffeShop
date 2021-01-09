using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoffeeShop.Models;

namespace CoffeeShop.Repositories
{
    public interface IBeanVarietyRepository
    {
        List<BeanVariety> GetAll();
        BeanVariety Get(int id);
        void Add(BeanVariety variety);
        void Update(BeanVariety variety);
        void Delete(int id);
    }
}
