const nameSession= 'f123-session'

export const session = {
    set(data) {
        try {
            localStorage.setItem(nameSession, JSON.stringify(data));
        } catch (e) {
            console.warn('Error al tratar de guardar la session, ' + e.toString());
        }
    },

    remove() {
        localStorage.removeItem(nameSession);
    },

    get() {
        var session = null;
        try {
            session = JSON.parse(localStorage.getItem(nameSession));
        } catch (e) {
            console.warn('Error al tratar de obtener  la session, ' + e.toString());
        }
        return session;
    },

    removeValue(key) {
        var session = this.get();
        if (!session)
            throw new Error("Session Inexistente");
        delete session[key];
        this.set(session);
    },

    setValue(key, value) {
        var session = this.get();
        if (!session)
            throw new Error("Session Inexistente");
        session[key] = value;
        this.set(session);
    },

    getValue(key) {
        if(this.get()) {
            if (!this.get()[key])
                throw new Error(key + " Inexistente");
            return this.get()[key];
        }
    },

    getMonedas: function () {
        if (!this.getConfig()['monedas'])
            throw new Error("Monedas Inexistentes");
        return JSON.parse(this.getConfig()['monedas']);
    },

    getConfig: function () {
        var config = null;
        try {
            config = _.isString(this.get()['config']) ?
                JSON.parse(this.get()['config']) :
                this.get()['config'];
        } catch (e) {
            console.warn("Error No existe configuracion de F123.");
        }
        return config;
    },

    setConfig: function (config) {
        var session = this.get();
        if (!session || !config)
            throw new Error("Configuracion Inexistente");
        session['config'] = config;
        this.set(session);
    },

    getTimbradoInfo: function () {
        var info = null;
        try {
            info = _.isString(this.get()['timbrado']) ?
                JSON.parse(this.get()['timbrado']) :
                this.get()['timbrado'];
        } catch (e) {
            console.warn("Error No existe Info. de Timbrado de F123.");
        }
        return info;
    },

    setTimbradoInfo: function (info) {
        var session = this.get();
        if (!session || !info)
            throw new Error("Error Info. de Timbrado de F123");
        session['timbrado'] = info;
        this.set(session);
    },

    getComplementos: function () {
        var info = null;
        try {
            info = _.isString(this.get()['complementos']) ?
                JSON.parse(this.get()['complementos']) :
                this.get()['complementos'];
        } catch (e) {
            console.warn("Error No existe Info. de Complementos de F123.");
        }
        return info;
    },

    setComplementos: function (info) {
        var session = this.get();
        if (!session || !info)
            throw new Error("Error Info. de Complementos de F123");
        session['complementos'] = info;
        this.set(session);
    },

    addComplementos: function (info) {
        var session = this.get();
        if (!session || !info)
            throw new Error("Error Info. de Complementos de F123");
        session['complementos'].push(info);
        this.set(session);
    }

};
