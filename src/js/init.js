let pages = [
    // dashboard
    {
        dst: "page/dashboard.html",
        url: "page/dashboard.html",
        lazy: true,
        init: function () {
            $pm.loadJS("js/dashboard.js")
        },
    },

    // colors
    {
        dst: "page/colors.html",
        url: "page/colors.html",
        lazy: true,
        init: function () {
            $pm.loadJS("js/colors.js")
        },
    },

    // typography
    {
        dst: "page/typography.html",
        url: "page/typography.html",
        lazy: true,
    },

    // base
    {
        dst: "page/base/breadcrumb.html",
        url: "page/base/breadcrumb.html",
        lazy: true,
    },
    {
        dst: "page/base/cards.html",
        url: "page/base/cards.html",
        lazy: true,
    },
    {
        dst: "page/base/carousel.html",
        url: "page/base/carousel.html",
        lazy: true,
    },
    {
        dst: "page/base/collapse.html",
        url: "page/base/collapse.html",
        lazy: true,
    },
    {
        dst: "page/base/forms.html",
        url: "page/base/forms.html",
        lazy: true,
    },
    {
        dst: "page/base/jumbotron.html",
        url: "page/base/jumbotron.html",
        lazy: true,
    },
    {
        dst: "page/base/list-group.html",
        url: "page/base/list-group.html",
        lazy: true,
    },
    {
        dst: "page/base/navs.html",
        url: "page/base/navs.html",
        lazy: true,
    },
    {
        dst: "page/base/pagination.html",
        url: "page/base/pagination.html",
        lazy: true,
    },
    {
        dst: "page/base/popovers.html",
        url: "page/base/popovers.html",
        lazy: true,
    },
    {
        dst: "page/base/progress.html",
        url: "page/base/progress.html",
        lazy: true,
    },
    {
        dst: "page/base/scrollspy.html",
        url: "page/base/scrollspy.html",
        lazy: true,
    },
    {
        dst: "page/base/switches.html",
        url: "page/base/switches.html",
        lazy: true,
    },
    {
        dst: "page/base/tables.html",
        url: "page/base/tables.html",
        lazy: true,
    },
    {
        dst: "page/base/tabs.html",
        url: "page/base/tabs.html",
        lazy: true,
    },
    {
        dst: "page/base/tooltips.html",
        url: "page/base/tooltips.html",
        lazy: true,
    },

    {
        dst: "page/buttons/brand-buttons.html",
        url: "page/buttons/brand-buttons.html",
        lazy: true,
    },
    {
        dst: "page/buttons/button-group.html",
        url: "page/buttons/button-group.html",
        lazy: true,
    },
    {
        dst: "page/buttons/buttons.html",
        url: "page/buttons/buttons.html",
        lazy: true,
    },
    {
        dst: "page/buttons/dropdowns.html",
        url: "page/buttons/dropdowns.html",
        lazy: true,
    },

    // charts
    {
        dst: "page/charts.html",
        url: "page/charts.html",
        lazy: true,
        init: function () {
            $pm.loadJS("js/charts.js")
        },
    },

    // icons
    {
        dst: "page/icons/coreui-icons-brand.html",
        url: "page/icons/coreui-icons-brand.html",
        lazy: true,
    },
    {
        dst: "page/icons/coreui-icons-flag.html",
        url: "page/icons/coreui-icons-flag.html",
        lazy: true,
    },
    {
        dst: "page/icons/coreui-icons-free.html",
        url: "page/icons/coreui-icons-free.html",
        lazy: true,
    },

    // notifications
    {
        dst: "page/notifications/alerts.html",
        url: "page/notifications/alerts.html",
        lazy: true,
    },
    {
        dst: "page/notifications/badge.html",
        url: "page/notifications/badge.html",
        lazy: true,
    },
    {
        dst: "page/notifications/modals.html",
        url: "page/notifications/modals.html",
        lazy: true,
    },

    // widgets
    {
        dst: "page/widgets.html",
        url: "page/widgets.html",
        lazy: true,
        init: function () {
            $pm.loadJS("js/widgets.js")
        },
    },

    // pages
    {
        dst: "page/pages/login.html",
        url: "page/pages/login.html",
        lazy: true,
        onshow: function () {
            $pm.element("sidebar").style.display = "none";
            $pm.element("header").style.display = "none";
            $pm.element("footer").style.display = "none";
        },
        onhide: function () {
            $pm.element("sidebar").style.display = "block";
            $pm.element("header").style.display = "block";
            $pm.element("footer").style.display = "block";
        },
    },
    {
        dst: "page/pages/register.html",
        url: "page/pages/register.html",
        lazy: true,
        onshow: function () {
            $pm.element("sidebar").style.display = "none";
            $pm.element("header").style.display = "none";
            $pm.element("footer").style.display = "none";
        },
        onhide: function () {
            $pm.element("sidebar").style.display = "block";
            $pm.element("header").style.display = "block";
            $pm.element("footer").style.display = "block";
        },
    },
    {
        dst: "page/pages/404.html",
        url: "page/pages/404.html",
        lazy: true,
        onshow: function () {
            $pm.element("sidebar").style.display = "none";
            $pm.element("header").style.display = "none";
            $pm.element("footer").style.display = "none";
        },
        onhide: function () {
            $pm.element("sidebar").style.display = "block";
            $pm.element("header").style.display = "block";
            $pm.element("footer").style.display = "block";
        },
    },
    {
        dst: "page/pages/500.html",
        url: "page/pages/500.html",
        lazy: true,
        onshow: function () {
            $pm.element("sidebar").style.display = "none";
            $pm.element("header").style.display = "none";
            $pm.element("footer").style.display = "none";
        },
        onhide: function () {
            $pm.element("sidebar").style.display = "block";
            $pm.element("header").style.display = "block";
            $pm.element("footer").style.display = "block";
        },
    },

    {
        dst: "page/blank.html",
        url: "page/blank.html",
        lazy: true,
        onshow: function () {
            $pm.element("sidebar").style.display = "none";
            $pm.element("header").style.display = "none";
            $pm.element("footer").style.display = "none";
        },
        onhide: function () {
            $pm.element("sidebar").style.display = "block";
            $pm.element("header").style.display = "block";
            $pm.element("footer").style.display = "block";
        },
    },
];

function onchange(pre, curr) {
    if (pre) {
        let preElem = $pm.element(pre.dst.replace("html", "src"));
        if (preElem) {
            preElem.className = "sidebar-item";
        }
    }
    let currElem = $pm.element(curr.dst.replace("html", "src"));
    if (currElem) {
        currElem.className = "sidebar-item active";
    }
}

$pm.bindPages(pages, onchange);
$pm.select("page/dashboard.html");
$pm.listenRouter(function (url) {
    if (!!url.router) {
        window.scrollTo(0, 0)
    } else {
        $pm.select("page/dashboard.html");
    }
});
