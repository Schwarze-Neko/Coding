<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable =['name', 'short_name','description'];

    public function players(){
        return $this->hasMany(Player::class);
    }
}
