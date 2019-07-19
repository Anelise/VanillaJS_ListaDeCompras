class BaseView{
	template(model){ throw new Error("Toda View deve implementar _template(model)");}
	update(model){ throw new Error("Toda View deve implementar update(model)");}
}