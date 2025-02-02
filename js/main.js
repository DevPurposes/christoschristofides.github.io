$(document).ready(function () {
    $("#flipbook").flipBook({
        
        pages:[
            {src:"img/catalogue/page-1.png", thumb:"img/catalogue/thumb-1.png", title:"Cover"},
            {src:"img/catalogue/page-2.png", thumb:"img/catalogue/thumb-2.png", title:"Page two"},
            {src:"img/catalogue/page-3.png", thumb:"img/catalogue/thumb-3.png", title:"Page three"},
            {src:"img/catalogue/page-4.png", thumb:"img/catalogue/thumb-4.png", title:"Page four"},
            {src:"img/catalogue/page-5.png", thumb:"img/catalogue/thumb-5.png", title:"Page five"},
            {src:"img/catalogue/page-6.png", thumb:"img/catalogue/thumb-6.png", title:"Page six"},
            {src:"img/catalogue/page-7.png", thumb:"img/catalogue/thumb-7.png", title:"Page seven"},
            {src:"img/catalogue/page-8.png", thumb:"img/catalogue/thumb-8.png", title:"Page eight"},
            {src:"img/catalogue/page-9.png", thumb:"img/catalogue/thumb-9.png", title:"Page nine"},
            {src:"img/catalogue/page-10.png", thumb:"img/catalogue/thumb-10.png", title:"Page ten"},
            {src:"img/catalogue/page-11.png", thumb:"img/catalogue/thumb-11.png", title:"Page elevent"},
            {src:"img/catalogue/page-12.png", thumb:"img/catalogue/thumb-12.png", title:"Page twelve"},
            {src:"img/catalogue/page-13.png", thumb:"img/catalogue/thumb-13.png", title:"Page thirteen"},
            {src:"img/catalogue/page-14.png", thumb:"img/catalogue/thumb-14.png", title:"Page fourteen"},
            {src:"img/catalogue/page-15.png", thumb:"img/catalogue/thumb-15.png", title:"Page fifteen"},
            {src:"img/catalogue/page-16.png", thumb:"img/catalogue/thumb-16.png", title:"Page sixteen"},
            {src:"img/catalogue/page-17.png", thumb:"img/catalogue/thumb-17.png", title:"Page seventeen"},
            {src:"img/catalogue/page-18.png", thumb:"img/catalogue/thumb-18.png", title:"Page eighteen"},
            {src:"img/catalogue/page-19.png", thumb:"img/catalogue/thumb-19.png", title:"Page nineteen"},
            {src:"img/catalogue/page-20.png", thumb:"img/catalogue/thumb-20.png", title:"Page twenty"},
            {src:"img/catalogue/page-21.png", thumb:"img/catalogue/thumb-21.png", title:"Page twenty one"},
            {src:"img/catalogue/page-22.png", thumb:"img/catalogue/thumb-22.png", title:"Page twenty two"},
            {src:"img/catalogue/page-23.png", thumb:"img/catalogue/thumb-23.png", title:"Page twenty three"},
            {src:"img/catalogue/page-24.png", thumb:"img/catalogue/thumb-24.png", title:"Last"}
        ],

        btnZoomIn : {vAlign:'top', hAlign:'right'},
        btnZoomOut : {vAlign:'top', hAlign:'right'},
        btnToc : {vAlign:'top', hAlign:'right'},
        btnShare :{vAlign:'top', hAlign:'right'},
        btnDownloadPages : {vAlign:'top', hAlign:'right'},
        btnDownloadPdf : {vAlign:'top', hAlign:'right'},
        btnSound : {vAlign:'top', hAlign:'right'},
        btnToc : {vAlign:'top', hAlign:'left'},
        btnThumbs : {vAlign:'top', hAlign:'left'},
        btnBookmark : {vAlign:'top', hAlign:'left'},
        btnExpand : {vAlign:'top', hAlign:'right'},
        btnPrint : {vAlign:'top', hAlign:'right'},
        btnAutoplay : {vAlign:'top', hAlign:'right'},
        currentPage:{hAlign:'center'},

        viewMode:'3d',

        skin:'dark',
        
        lightBox:true,

        menu2Transparent:false,
        menu2OverBook:false,
        
    });
})
