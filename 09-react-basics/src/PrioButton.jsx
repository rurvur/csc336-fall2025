export default function changePrio(assign) {
    if (assign.priority == "high"){
        return assign.priority === "high" ? { ...assign, priority: "low" } : assign;
    }else{
        return assign.priority === "low" ? { ...assign, priority: "high" } : assign;
    }
}