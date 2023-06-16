

//% color="#f8ad30" iconWidth=50 iconHeight=40
namespace BaseDeploy{



    //% block="导入模型 路径[PATH]" blockType="command"
    //% PATH.shadow="string" PATH.defl="model.onnx"
    export function loadModel(parameter: any, block: any) {
        let path=parameter.PATH.code;
 
        Generator.addImport(`import BaseDeploy as bd`)
        Generator.addCode(`model = bd(${path})`)
    }

    //% block="调用模型识别图片[IMG]" blockType="command"
    //% IMG.shadow="string" IMG.defl="test.png"
    export function inference(parameter: any, block: any) {
        let img=parameter.IMG.code;

        Generator.addCode(`bd_result = model.inference(${img})`)
    }

    //% block="从 分类任务 识别结果中获取[CFRESULT]" blockType="reporter"
    //% CFRESULT.shadow="dropdown" CFRESULT.options="CFRESULT"
    export function getClassificationResult(parameter: any, block: any) {
        let result=parameter.CFRESULT.code;
        //console.log(result)
        if(result=="所有结果"){
            Generator.addCode(`bd_result`)
        }else{
            Generator.addCode(`bd_result['${result}']`)
        }
        
    }

    //% block="从 检测任务 识别结果中获取第[INDEX]个[DERESULT]" blockType="reporter"
    //% INDEX.shadow="number" INDEX.defl="0"
    //% DERESULT.shadow="dropdown" DERESULT.options="DERESULT"
    export function getDetectionResult(parameter: any, block: any) {
        let index=parameter.INDEX.code;
        let result=parameter.DERESULT.code;
        if(result=="所有结果"){
            Generator.addCode(`bd_result`)
        }else{
            Generator.addCode(`bd_result[${index}]['${result}']`)
        }

        
    }


        //% block="---"
        export function noteSep5() {

        }


    //% block="在图像[IMG]上绘制文字[TEXT] 颜色[COLOR] 坐标X[X]Y[Y]" blockType="command"
    //% IMG.shadow="normal" IMG.defl="grab"
    //% TEXT.shadow="string" TEXT.defl="id1"
    //% COLOR.shadow="colorPalette" 
    //% X.shadow="number"   X.defl="10"
    //% Y.shadow="number"   Y.defl="20"
    export function drawText(parameter: any, block: any) {
        let img=parameter.IMG.code;
        let txt=parameter.TEXT.code;
        let color=parameter.COLOR.code;
        let x=parameter.X.code;
        let y=parameter.Y.code;

        var r = 0;
        var g = 0;
        var b = 0;
        try {
            if ( color.length == 8 ) {//分别截取RGB值然后转换为数字值
                r = parseInt(color.substring(2, 4), 16);
                g = parseInt(color.substring(4, 6), 16);
                b = parseInt(color.substring(6, 8), 16);
            }
        } catch(e) {
            return '';
        }
 
        Generator.addCode(`cv2.putText(${img}, str(${txt}), (${x}, ${y}), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (${b}, ${g}, ${r}), 2)`)     
    }



    function replaceQuotationMarks(str:string){
            str=str.replace(/"/g, ""); //去除所有引号
            return str
    }


    
}
