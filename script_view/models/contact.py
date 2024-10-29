from odoo import models,fields

class ScriptContact(models.Model):
    _name = 'script.contact'
    _description = 'Script Contact'

    name = fields.Char()
    age = fields.Integer()
    latitude = fields.Float(digits=(10, 7))
    longitude = fields.Float(digits=(10, 7))