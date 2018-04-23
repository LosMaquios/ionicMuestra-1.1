export function toast(Ctrl){
    [
'good',
'error',
'info'
    ].forEach(element => {
        Ctrl.prototype['show' + element] = function(message){
            let toast = this.create({
				message,
				duration: 3000,
				position: "bottom"
			})
			return toast.present(toast)
        }
    })
}