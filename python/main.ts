

//% color="#f8ad30" iconWidth=50 iconHeight=40
namespace BaseDeploy{



    //% block="导入模型 路径[PATH] 推理框架[BACKEND]" blockType="command"
    //% PATH.shadow="string" PATH.defl="model.onnx"
    //% BACKEND.shadow="dropdown" BACKEND.options="BACKEND"
    export function loadModel(parameter: any, block: any) {
        let path=parameter.PATH.code;
        let bachend=parameter.BACKEND.code;
 
        Generator.addImport(`import BaseDeploy as bd`)
        Generator.addCode(`model = bd(${path},${bachend})`)
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


    //% block="将 分类任务 推理结果绘制在[IMG]上" blockType="command"
    //% IMG.shadow="normal" IMG.defl="img"
    export function drawClassificationImg(parameter: any, block: any) {
        let img=parameter.IMG.code;

        Generator.addCode(`${img}=show_cls(${img}, bd_result)`)
    }

    //% block="将 检测任务 推理结果绘制在[IMG]上" blockType="command"
    //% IMG.shadow="normal" IMG.defl="img"
    export function drawDetectionImg(parameter: any, block: any) {
        let img=parameter.IMG.code;

        Generator.addCode(`${img}=show_det(${img}, bd_result)`)
    }

        //% block="---"
        export function noteSep5() {

        }

    //% block="启动gradio 模型路径[PATH]" blockType="command"
    //% PATH.shadow="string" PATH.defl="model.onnx"
    export function startGradio(parameter: any, block: any) {
        let path=parameter.PATH.code;

        Generator.addCode(`model = bd(${path})`)
        Generator.addCode(`model.run_gradio()`)
    }

    //% block="启动FastAPI 模型路径[PATH]" blockType="command"
    //% PATH.shadow="string" PATH.defl="model.onnx"
    export function startFastAPI(parameter: any, block: any) {
        let path=parameter.PATH.code;

        Generator.addCode(`model = bd(${path})`)
        Generator.addCode(`model.run_fastapi()`)
    }

    //% block="启动SIoT监听 IP地址[IP] 模型路径[PATH]" blockType="command"
    //% IP.shadow="string" IP.defl="127.0.0.0"
    //% PATH.shadow="string" PATH.defl="model.onnx"
    export function startSIoT(parameter: any, block: any) {
        let path=parameter.PATH.code;
        let ip=parameter.IP.code;

        Generator.addCode(`model = bd(${path})`)
        Generator.addCode(`model.run_siot(ip=${ip})`)
    }

    //% block="启动pywebio 模型路径[PATH] " blockType="command"
    //% PATH.shadow="string" PATH.defl="model.onnx"
    export function startPywebio(parameter: any, block: any) {
        let path=parameter.PATH.code;

        Generator.addCode(`model = bd(${path})`)
        Generator.addCode(`model.run_pywebio()`)
    }


    function replaceQuotationMarks(str:string){
            str=str.replace(/"/g, ""); //去除所有引号
            return str
    }


    
}
