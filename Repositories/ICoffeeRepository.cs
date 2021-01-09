using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoffeeShop.Models;

namespace CoffeeShop.Repositories
{
    public interface ICoffeeRepository
    {
        List<Coffee> GetAll();
        Coffee Get(int id);
        void Add(Coffee coffee);
        void Update(Coffee coffee);
        void Delete(int id);
    }
}
