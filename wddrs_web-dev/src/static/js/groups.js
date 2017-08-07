$(function(){
        $("#tb_groups").bootstrapTable({
                url: "",
                dataType: "json",
                pagination: true, //分页
                singleSelect: true,
                sidePagination: "server", //服务端处理分页
                pageNumber:1,
                queryParams:queryParams,
                queryParamsType: "",
                pageSize: 5, //每页的记录行数（*） 
                pageList: [5, 10, 15, 20, 25], 
        })
        function queryParams(params) {
                return {
                    rows: params.pageSize,
                    page: params.pageNumber
                }
        }
        console.info($("#div_groups_content").width())
        $("#div_groups").width($("#div_groups_content").width()-20)
        $(".th-inner").css("text-align","center")
});

