﻿using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MultiTenantDemo.Models;

namespace MultiTenantDemo.Views.Tenants.Tenant2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }
    }
}
