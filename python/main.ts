

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

        Generator.addCode(`bd_result['${result}']`)
    }

    //% block="从 检测任务 识别结果中获取第[INDEX]个[DERESULT]" blockType="reporter"
    //% INDEX.shadow="number" INDEX.defl="0"
    //% DERESULT.shadow="dropdown" DERESULT.options="DERESULT"
    export function getDetectionResult(parameter: any, block: any) {
        let index=parameter.INDEX.code;
        let result=parameter.DERESULT.code;

        Generator.addCode(`bd_result[${index}]['${result}']`)
    }


        //% block="---"
        export function noteSep5() {

        }




    function replaceQuotationMarks(str:string){
            str=str.replace(/"/g, ""); //去除所有引号
            return str
    }


    
}
