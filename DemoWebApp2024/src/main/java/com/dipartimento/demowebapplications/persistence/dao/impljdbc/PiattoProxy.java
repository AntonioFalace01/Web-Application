package com.dipartimento.demowebapplications.persistence.dao.impljdbc;

import com.dipartimento.demowebapplications.model.Piatto;
import com.dipartimento.demowebapplications.persistence.DBManager;

import java.util.List;

public class PiattoProxy extends Piatto {

    public String getIngredienti() {
        if(this.ingredienti==null){
            this.ingredienti= DBManager.getInstance().getPiattoDao().findByPrimaryKey(this.nome).getIngredienti();
        }
        return ingredienti;
    }
}
