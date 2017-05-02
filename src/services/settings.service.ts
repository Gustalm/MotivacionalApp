export class SettingsService{
    private _canChangeBackground: boolean = false;
    
    constructor(){ }

    setCanChangeBackGround(flag: boolean){
        this._canChangeBackground = flag;
    }

    getBackgroundCanChange(){
        return this._canChangeBackground;
    }
}