using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ccms_mapbox.Startup))]
namespace ccms_mapbox
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
