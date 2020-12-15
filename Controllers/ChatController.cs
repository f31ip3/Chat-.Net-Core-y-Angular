using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiAngular.Models.Response;
using MiAngular.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace MiAngular.Controllers
{
    [Route("api/[controller]")]
    public class ChatController : Controller
    {
        private Models.MyDBContext db;

        public ChatController(Models.MyDBContext context)
        {
            db = context;
        }
        [HttpGet("[action]")]
        public IEnumerable<MessageViewModels> Message()
        {
            List<MessageViewModels> lst = new List<MessageViewModels>();

            try  {

                    lst = ( from d in db.Message
                            orderby d.Id descending //para ordenal los mensajes del ultimo al primero
                            select new MessageViewModels
                                  {
                                     Id = d.Id,
                                     Name = d.Name,
                                     Text = d.Text
                                  }
                           ).ToList();
            }
            catch (Exception ex){

            }
            return lst;
        }
        //Voy a regresar el tipo de elmento de my clase MyResponse
        [HttpPost("[action]")]
        public MyResponse Add([FromBody] MessageViewModels model)
        {
            MyResponse oR = new MyResponse();
            try
            {
                Models.Message oMessage = new Models.Message();//esta clase hace referencia a la tabla de mi BDD SQL
                oMessage.Name = model.Name;
                oMessage.Text = model.Text;
                //utiliso mi entity
                db.Message.Add(oMessage);
                db.SaveChanges();         
                oR.Success = 1;
            }
            catch(Exception ex){

                oR.Success = 0;
                oR.Message = ex.Message;
            }
            return oR;
        }


        /*public IActionResult Message()///Solo de prueba para que me regrese un Json
{
    try
    {
        List<Models.Message> lst = null;
        lst = db.Message.ToList();

        return Json(lst)
    }
    catch (Exception ex)
    {
        return BadRequest(ex.Message);
    }
}*/

    }
}
