using System.Collections.Generic;
using WebApplication1.Interfaces;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class UserService: IUserService
    {
        List<User> users = new List<User>()
        {
            new User { Id = 1, UserName = "Shevi", Password = "1111", JobSearchField = JobFields.Secretariat },
            new User { Id = 2, UserName = "Mali", Password = "2222", JobSearchField = JobFields.Architecture },
            new User { Id = 3, UserName = "Adam", Password = "3333", JobSearchField = JobFields.ComputerProgramming },
        };
        public User GetUser( string userName, string password)
        {
            User user=users.Find(user=> user.UserName == userName && user.Password == password);
            if(user==null)
                return null;
            return user;
        }
    }
}
