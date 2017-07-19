var p=[1, 81, 70, 68, 56, 56, 45, 23, 23, 20, 13, 12, 12, 4, 2,90,123,1233,34,16,89,90,56,5,12,0,34,56];
// 冒泡排序
function sort(nm){
	var arr='';
	for(var i=0;i<nm.length;i++){
        for(var y=0;y<nm.length-1;y++){
                if(nm[i]<nm[y]){
                arr=nm[i];
                nm[i]=nm[y];
                nm[y]=arr;
            }
        }
	}
	return nm;
};
console.log(sort(p).reverse());

// 数组去重
function qc(arr){
	var attr=[];
	for(var i=0;i<arr.length;i++){
		if(attr.indexOf(arr[i])==-1){
			attr.push(arr[i])
		}
	}
	return attr;
}
console.log(qc(p))

// 统计数组中重复元素出现次数
function tj(arr){
	var obj={};
	for(var i=0;i<arr.length;i++){
		if(!obj[arr[i]]){
			obj[arr[i]]=1;
		}
		else{
			obj[arr[i]]+=1;
		}
	}
	return obj;
}	
console.log(tj([12,12,12,34,12,34,5,6,77,5,46,13,45,78,90,23]))
